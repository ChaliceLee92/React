import React, { Component } from 'react';
import './App.css';
import logo from '../../logo.svg';
import CommentsInput from '../../components/CommentsInput/CommentsInput';
import CommentsList from '../../components/CommentsList/CommentsList';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { commentsAdd ,DelComment,GetCommentsAsync} from '../../redux/action'


class App extends Component {

  static propTypes = {
    comments:PropTypes.array.isRequired,
    commentsAdd:PropTypes.func.isRequired,
    DelComment:PropTypes.func.isRequired,
    GetCommentsAsync:PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.GetCommentsAsync()
  }


  render() {
    const { comments,commentsAdd, DelComment} = this.props
    return (
      <div className="App">
        <div className="App_main">
          <h1 className="text">请发表对React的评论</h1>
          <img className="App_img" src={logo} alt="" />
        </div>
        <div className="componentsList">
          <CommentsInput commentsAdd={commentsAdd} />
          <CommentsList
            comments={comments}
            DelComment={DelComment}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({comments:state.comments}),
  { commentsAdd , DelComment,GetCommentsAsync }
)(App)
