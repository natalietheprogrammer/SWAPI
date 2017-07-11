import React from 'react';
import { browserHistory } from 'react-router';
import styles from '../../common/base.css';
import $ from 'jquery';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      queryString: "",
      category: "",
      searchResults: []
    }
  }

  showDetails(category, id) {
    browserHistory.push('/details/' + category + '/' + id);
  }

  searchForInput(e) {
    if (e) {
      e.preventDefault();
    }

    // API
    $.ajax({
      url: 'http://swapi.co/api/' + this.state.category + "?search=" + this.state.queryString,
      method: 'GET',
      dataType: 'json'
    }).then((swapiData) => {
      this.setState({searchResults: swapiData.results});
    })

  }

  setQueryString(queryString) {
    this.setState({queryString})
  }

  setCategory(category) {
    this.setState({category}, function () {
      this.searchForInput()
    })
  }
  
  render() {

    // Selected/not selected styles
    var selectedCategory = {
      fontSize: 40 + 'px'
    };
    var nonSelectedCategory = {
      backgroundColor: 'black',
      opacity: '0.85'
    };

    // Button backgrounds
    var people = {
      backgroundImage: 'url(' + require('../../images/people_1.jpg') + ')'
    };
    var planets = {
      backgroundImage: 'url(' + require('../../images/planets.png') + ')'
    };
    var starships = {
      backgroundImage: 'url(' + require('../../images/starShips_1.jpg') + ')'
    };

    var headerImage = {
      backgroundImage: 'url(' + require('../../images/heroImg_2.jpg') + ')'
    };


    return (
        <div className={styles.outterWrapper}>
          <header style={headerImage}>
            <h1>star wars</h1>
            <p className={styles.headerSection}>api DEMO</p>
          </header>
          <main>
            <p>choose your category</p>
            {/* category buttons */}
            <div className={styles.buttonsContainer}>
              <div className={styles.buttonOverlay}>
                <div className={styles.buttonText}>people</div>
                <div className={styles.buttonCover} style={(this.state.category !== 'people' ? nonSelectedCategory : null)}></div>
                <button style={(this.state.category == 'people' ? $.extend({}, selectedCategory, people) : people)} id="people" className={[styles.category, styles.people].join(' ')} onClick={()=>this.setCategory('people')}></button>
              </div>
              <div className={styles.buttonOverlay}>
                <div className={styles.buttonText}>planets</div>
                <div className={styles.buttonCover} style={(this.state.category !== 'planets' ? nonSelectedCategory : null)}></div>
                <button style={this.state.category == 'planets' ? $.extend({}, selectedCategory, planets) : planets} id="planets" className={[styles.category, styles.planets].join(' ')} onClick={()=>this.setCategory('planets')}></button>
              </div>
              <div className={styles.buttonOverlay}>
                <div className={styles.buttonText}>starships</div>
                <div className={styles.buttonCover} style={(this.state.category !== 'starships' ? nonSelectedCategory : null)}></div>
                <button style={this.state.category == 'starships' ? $.extend({}, selectedCategory, starships) : starships} id="starships" className={[styles.category, styles.starships].join(' ')} onClick={()=>this.setCategory('starships')}></button>
              </div>
            </div>
            {/* search form */}
            <form action="" name="searchForm" onSubmit={(e)=>this.searchForInput(e)}>
              <input type="text" value={this.state.queryString} onChange={(e)=>this.setQueryString(e.target.value)} placeholder="refine search" className={styles.userInput} />
              <input type="button" value="go" className={styles.submit} onClick={()=>this.searchForInput()} />
            </form>
            <div id="searchResults" className={styles.searchResults}>
              {this.state.searchResults.map((v, i)=>{
                var theUrl = v.url;
                var params = theUrl.substr(theUrl.indexOf('api/') + 4, theUrl.length); // params = "/category/number"

                var category = params.substr(0, params.indexOf('/')); // category = category name
                var id = params.substr(params.indexOf('/'), params.indexOf('/'), params.indexOf('/') + 1); // id = "/number/"
                id = id.substr(1, id.length - 2) // id = number

                return <div className={styles.searchLine} key={i} onClick={()=>this.showDetails(category, id)}>
                  <p>{v.name}</p>
                  <p>→</p>
                </div>
              })}
            </div>
          </main>

          <footer><p>Made by Natalie Baranova using SWAPI API.</p></footer>

        </div>

    );
  }
}
