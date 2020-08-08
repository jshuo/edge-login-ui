// @flow

import { connect } from 'react-redux'

import { Header } from '../../components/common/Header.js'
import { type Dispatch, type RootState } from '../../types/ReduxTypes.js'

const mapStateToProps = (state: RootState) => {
  const workflow = state.workflow
  const currentWorkflow = workflow[state.workflow.currentKey]
  const currentScene = currentWorkflow.details[state.workflow.currentSceneIndex]
  return {
    showBackButton: currentScene.back,
    showSkipButton: currentScene.skip,
    title: currentScene.title,
    subTitle: currentScene.subTitle
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    goBack: () => dispatch({ type: 'WORKFLOW_BACK' })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)