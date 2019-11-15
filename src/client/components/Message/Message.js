import React from "react";
import ReactDOM from "react-dom";
import Popup from "reactjs-popup";
import "./styles.css";
import CsvDownloader from 'react-csv-downloader';
import PropTypes from "prop-types";
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import { React15Tabulator} from "react-tabulator"; // for React 15.x


class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ""
    };
  }

  // Event fired when the input value is changed
  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  // Event fired when the user clicks on a suggestion
  onClick = e => {
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  // Event fired when the user presses a key down
  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li
                  className={className}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No search SMS Available!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
      <label className="search-label"><input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          placeholder="Search..."
        />
        
        {suggestionsListComponent}
        <i className="fa fa-search search-icon"/>
        </label>
      </Fragment>
    );
  }
}

function Search() {
  return (
    <div>
    

      <Autocomplete
        suggestions={[
          'KMD32UT','KUA82SE','KLA90AU','KAP19VA','KJA72SD',


        ]}
      />
      
    </div>
  );
}

  


const data = [
  {
    id: 1,
    date: "November 4, 2019 01:21PM",
    text: "KMY98M",
    from: "+254 704868223",
    
   
  },
  {
    id: 2,
    date: "November 5, 2019 01:21PM",
    text: "KMH98M",
    from: "+254 784567223",
    
   
  },
  {
    id: 3,
    date: "November 6, 2019 01:21PM",
    text: "KMY98M",
    from: "+254 797858223",
  },
  {
    id: 4,
    date: "November 4, 2019 01:21PM",
    text: "KMY34R",
    from: "+254 704868223",
  },
  {
    id: 5,
    date: "December 9, 2019 01:21PM",
    text: "KMY98M",
    from: "+254 704868223",
  },
  {
    id: 6,
    date: "December 4, 2019 01:21PM",
    text: "KCB23K",
    from: "+254 72398593",
  },
  {
    id: 7,
    date: "December 4, 2019 07:21PM",
    text: "KMY98M",
    from: "+254 704868223",
  }
];



class Table extends React.Component {
  state = {
    data: [],
    selectedName: ""
  };
  ref = null;

  columns = [
    { title: "Date", field: "date", width: 150 },
    
    { title: "Text", field: "text" },
    { title: "From", field: "from" },
    
   
  ];

  rowClick = (e, row) => {
    console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
    console.log(`rowClick id: ${row.getData().id}`, row, e);
    this.setState({ selectedName: row.getData().name });
  };

  setData = () => {
    this.setState({ data });
  };

  clearData = () => {
    this.setState({ data: [] });
  };

  render() {

    const columns = [{
      id: 'date',
      displayName: 'Date'
    }, {
      id: 'text',
      displayName: 'Text'
    }, {
      id: 'from',
      displayName: 'From'
    }];
    const datas =[
      {
        id: 1,
        date: "November 4, 2019 01:21PM",
        text: "KMY98M",
        from: "+254 704868223",
        
       
      },
      {
        id: 2,
        date: "November 5, 2019 01:21PM",
        text: "KMH98M",
        from: "+254 784567223",
        
       
      },
      {
        id: 3,
        date: "November 6, 2019 01:21PM",
        text: "KMY98M",
        from: "+254 797858223",
      },
      {
        id: 4,
        date: "November 4, 2019 01:21PM",
        text: "KMY34R",
        from: "+254 704868223",
      },
      {
        id: 5,
        date: "December 9, 2019 01:21PM",
        text: "KMY98M",
        from: "+254 704868223",
      },
      {
        id: 6,
        date: "December 4, 2019 01:21PM",
        text: "KCB23K",
        from: "+254 72398593",
      },
      {
        id: 7,
        date: "November 4, 2019 01:21PM",
        text: "KMY98M",
        from: "+254 704868223",
      }
    ];
      
    const options = {
     
    
      movableRows: true,
      layout:"fitColumns",      //fit columns to width of table
	responsiveLayout:"hide",  //hide columns that dont fit on the table
	tooltips:true,            //show tool tips on cells
	addRowPos:"top",          //when adding a new row, add it to the top of the table
	history:true,             //allow undo and redo actions on the table
	pagination:true,       //paginate the data
	paginationSize:7,         //allow 7 rows per page of data
	movableColumns:true,      //allow column order to be changed
  resizableRows:true, 
  width: '100%',
  margin: '0 auto',
  height: 300,
  border: '1px solid #999999',
    speed: 50,
    isScroll: true,
    backgroundColor: '#E8F4FC',
    show: true,
    interval: 1,      //allow row order to be changed
	initialSort:[             //set the initial sort order of the data
		{column:"date", dir:"text"},

     
  ]};
    return (
      <div>
        
    {/* <Sidebar/> */}
             <div>
             <Search/>
        
          {/* Asynchronous data: (e.g. fetch) -{" "} */}
          <button onClick={this.setData} style={{backgroundColor: "lightblue"}}>Set Data</button>
          <button onClick={this.clearData}>Clear</button>
          <CsvDownloader
        filename="messagelogs"
        separator=";"
        columns={columns}
        datas={datas}
        variant="info"
        text="Download csv" />
         
         
        
      
        </div>
       
        <React15Tabulator columns={this.columns} data={this.state.data} options={options}/>
        


      
      </div>
    );
  }
}


function Message() {
  return (

    <div className="App">
     <Popup trigger={<button style={{float: "right"}}>  Create Message </button>} modal>
    {close => (
      <div className="modal">
        <a href='/' className="close" onClick={close}>
          &times;
        </a>
        <div className="header"></div>
        <div className="content">
          {" "}
          <div>

<form action="#">


<select name="cars">
    <option value="to">To</option>
    <option value="rider">Rider</option>
    <option value="sacco">Sacco</option>
    <option value="driders">Deactivated Riders</option>
    <option value="dsaccos">Deactivated Saccos</option>
  </select>
<textarea id="subject" name="subject" placeholder="Write something.."></textarea>



</form>

</div>
        </div>
        <div className="actions">
          <Popup
            trigger={<input type="submit" value="Submit" />}
            position="top center"
            closeOnDocumentClick
          >
            <span>
              Message sent successfully
            </span>
          </Popup>
        
        </div>
      </div>
    )}
  </Popup>
  <Table/>
    </div>
  )}

export default Message
