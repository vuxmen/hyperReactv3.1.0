// @flow
import React, { useState, useEffect, useCallback, FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/reducers'

// actions
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
} from '../../redux/actions'

// constants
import * as layoutConstants from '../../constants/layout'

// components
import LayoutTypes from './LayoutTypes'
import LayoutWidth from './LayoutWidth'
import LeftSideBarTheme from './LeftSideBarTheme'
import LeftSideBarType from './LeftSideBarType'

const ThemeCustomizer: FC = () => {
  const dispatch = useDispatch()

  const { layoutType, layoutWidth, leftSideBarType, leftSideBarTheme } =
    useSelector((state: RootState) => ({
      layoutType: state.Layout.layoutType,
      layoutWidth: state.Layout.layoutWidth,
      leftSideBarTheme: state.Layout.leftSideBarTheme,
      leftSideBarType: state.Layout.leftSideBarType,
    }))

  const [disableLayoutWidth, setDisableLayoutWidth] = useState(false)
  const [disableSidebarTheme, setDisableSidebarTheme] = useState(false)
  const [disableSidebarType, setDisableSidebarType] = useState(false)

  /**
   * change state based on props changes
   */
  const _loadStateFromProps = useCallback(() => {
    setDisableLayoutWidth(
      layoutType !== layoutConstants.LAYOUT_DETACHED &&
        layoutType !== layoutConstants.LAYOUT_FULL
    )

    setDisableSidebarTheme(
      layoutType !== layoutConstants.LAYOUT_HORIZONTAL &&
        layoutType !== layoutConstants.LAYOUT_DETACHED
    )
    setDisableSidebarType(layoutType !== layoutConstants.LAYOUT_HORIZONTAL)
  }, [layoutType])

  useEffect(() => {
    _loadStateFromProps()
  }, [_loadStateFromProps])

  /**
   * On layout change
   */
  const changeLayoutType = (value: any) => {
    var layout = value
    switch (layout) {
      case 'topnav':
        dispatch(changeLayout(layoutConstants.LAYOUT_HORIZONTAL))
        break
      case 'detached':
        dispatch(changeLayout(layoutConstants.LAYOUT_DETACHED))
        break
      case 'full':
        dispatch(changeLayout(layoutConstants.LAYOUT_FULL))
        break
      default:
        dispatch(changeLayout(layoutConstants.LAYOUT_VERTICAL))
        break
    }
  }

  /**
   * Change the width mode
   */
  const changeWidthMode = (value: any) => {
    var mode = value

    switch (mode) {
      case 'boxed':
        dispatch(changeLayoutWidth(layoutConstants.LAYOUT_WIDTH_BOXED))
        break
      default:
        dispatch(changeLayoutWidth(layoutConstants.LAYOUT_WIDTH_FLUID))
        break
    }
  }

  /**
   * Changes the theme
   */
  const changeLeftSidebarTheme = (value: any) => {
    var theme = value
    switch (theme) {
      case 'default':
        dispatch(changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_DEFAULT))
        break
      case 'light':
        dispatch(changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_LIGHT))
        break
      default:
        dispatch(changeSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_DARK))
        break
    }
  }

  /**
   * Change the leftsiderbar type
   */
  const changeLeftSiderbarType = (value: any) => {
    var type = value
    switch (type) {
      case 'condensed':
        dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED))
        break
      case 'scrollable':
        dispatch(
          changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_SCROLLABLE)
        )
        break
      default:
        dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED))
        break
    }
  }

  /**
   * Reset everything
   */
  const reset = () => {
    changeLayoutType(layoutConstants.LAYOUT_VERTICAL)
    changeWidthMode(layoutConstants.LAYOUT_WIDTH_FLUID)
    changeLeftSidebarTheme(layoutConstants.LEFT_SIDEBAR_THEME_DEFAULT)
    changeLeftSiderbarType(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED)
  }

  return (
    <React.Fragment>
      <div className="p-3">
        <div className="alert alert-warning" role="alert">
          <strong>Customize </strong> the overall color scheme, sidebar menu,
          etc.
        </div>

        {/* Layouts */}
        <LayoutTypes
          changeLayoutType={changeLayoutType}
          layoutType={layoutType}
          layoutConstants={layoutConstants}
        />

        {/* Width */}
        {disableLayoutWidth && (
          <LayoutWidth
            changeWidthMode={changeWidthMode}
            layoutWidth={layoutWidth}
            layoutConstants={layoutConstants}
          />
        )}

        {/* Left Sidebar */}
        {disableSidebarTheme && (
          <LeftSideBarTheme
            changeLeftSidebarTheme={changeLeftSidebarTheme}
            leftSideBarTheme={leftSideBarTheme}
            layoutConstants={layoutConstants}
          />
        )}

        {/* Left Sidebar Size */}
        {disableSidebarType && (
          <LeftSideBarType
            changeLeftSiderbarType={changeLeftSiderbarType}
            leftSideBarType={leftSideBarType}
            layoutConstants={layoutConstants}
          />
        )}

        <div className="d-grid mt-4">
          <button
            className="btn btn-primary"
            id="resetBtn"
            onClick={() => reset()}
          >
            Reset to Default
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ThemeCustomizer
