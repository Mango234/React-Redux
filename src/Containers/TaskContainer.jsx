import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../Actions/TaskAction';
import Pagination from "react-js-pagination";


class TaskList extends Component {

  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      activePage: 1
    };
  }

  getTaskAm() {
    return this.props.Task.length;
  }


  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });

    document.getElementById("preloader").classList.remove("close");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.getElementById("preloader").classList.add("close");
      document.body.style.overflow = "scroll";
    }, 1300);
  }

  ShowList() {
    console.log(this.state.activePage);
    if (this.state.activePage == 1) {
      return this.props.Task.slice(0, 5).map((Task) => {
        return (
          <li key={Task.id}>
            <ul>
              <li>{Task.id}</li>
              <li>{Task.name}</li>
              <li>{Task.surname}</li>
              <li>{Task.desc}</li>
            </ul>
          </li>
        )
      })
    } else if (this.state.activePage == 2) {
      return this.props.Task.slice(5, 10).map((Task) => {
        return (
          <li key={Task.id}>
            <ul>
              <li>{Task.id}</li>
              <li>{Task.name}</li>
              <li>{Task.surname}</li>
              <li>{Task.desc}</li>
            </ul>
          </li>
        )
      })
    } else if (this.state.activePage == 3) {
      return this.props.Task.slice(10, 15).map((Task) => {
        return (
          <li key={Task.id}>
            <ul>
              <li>{Task.id}</li>
              <li>{Task.name}</li>
              <li>{Task.surname}</li>
              <li>{Task.desc}</li>
            </ul>
          </li>
        )
      })
    } else if (this.state.activePage == 4) {
      return this.props.Task.slice(15, 20).map((Task) => {
        return (
          <li key={Task.id}>
            <ul>
              <li>{Task.id}</li>
              <li>{Task.name}</li>
              <li>{Task.surname}</li>
              <li>{Task.desc}</li>
            </ul>
          </li>
        )
      })
    }
  }



  render() {
    return (
      <div>
      <ul className="hr">
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={5}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
          totalItemsCount={this.getTaskAm()}
        />
        </ul>
        <ul>
        {this.ShowList()}
      </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Task: state.Task
});

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ select: select }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TaskList);
