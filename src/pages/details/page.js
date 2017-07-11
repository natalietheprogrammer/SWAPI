import React from 'react';
import { browserHistory } from 'react-router';
import styles from '../../common/base.css';
import $ from 'jquery';

export default class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiURL: "http://swapi.co/api/",
      data: {name: ""},
    }

    this.getData(this.props.params.category, this.props.params.userId);
  }


  getData(category, id) {
    $.ajax({
      url: this.state.apiURL + category + "/" + id,
      method: 'GET',
      dataType: 'json'
    }).then((data)=> {
      this.setState({data: data});
    })
  }


  render() {
    return (
      <div className={styles.outterWrapperB}>
        <div className={styles.backButton} onClick={()=>browserHistory.push('/')}><p>BACK</p></div>
        <h1 className={styles.heading}>{this.state.data.name}</h1>
        <div>
          <div className={styles.detailsAll}>
            {
              Object.keys(this.state.data).map((v, i)=>{
                if (v == 'name') return null;

                if (typeof this.state.data[v] == "object" && this.state.data[v].length == 0) {
                  return <div key={i} className={styles.detailsRow}>
                    <p>
                      { 
                        v
                      }
                    </p>
                    <p>
                      {
                        "None"
                      }
                    </p>
                  </div>
                } else if (typeof this.state.data[v] == "object") {
                  return <div key={i} className={styles.detailsRow}>
                    <p>
                      { 
                        v
                      }
                    </p>
                    <p>
                      {
                        this.state.data[v].map((vB, iB)=>{
                          return <span key={iB}>
                            {this.state.data[v].length !== 0 ? vB : "none"}
                          </span>
                        })

                      }
                    </p>
                  </div>
                } else {
                return <div key={i} className={styles.detailsRow}>
                    <p>
                      { 
                        v
                      }
                    </p>
                    <p>
                      {
                        this.state.data[v].length !== 0 ? this.state.data[v] : "none"
                      }
                    </p>
                  </div>
                }
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
