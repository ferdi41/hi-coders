import React from "react";


import PersonalList from "./PersonalList";
import RegisterInfo from "./RegisterInfo";
import AddPerson from "./AddPerson";
import EditPerson from "./EditPerson";

import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    personalNames: [],
    searchQuery: "",
  };

  // promise tabanli 3th part npm kutuphanesi kullandim.
  async componentDidMount() {
    const baseURL = "http://localhost:3002/personalNames";
    const response = await axios.get(baseURL);
 
    this.setState({ personalNames: response.data });
  }
  // bu fonksiyon fetch ile kullanildi
  deletePerson = async (person) => {
    const deleteBaseURL = `http://localhost:3002/personalNames/${person.id}`;
    await fetch(deleteBaseURL, {
      method: "DELETE",
    });
    const newPersonList = this.state.personalNames.filter(
      (item) => item.id !== person.id
    );
    this.setState((state) => ({
      personalNames: newPersonList,
    }));
  };
  searchPerson = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  // ADD PERSON
  addPerson = async (person) => {
    await axios.post(`http://localhost:3002/personalNames/`, person);
    this.setState((state) => ({
      personalNames: state.personalNames.concat([person]),
    }));
  };
  
  // EDIT PERSON
  editPerson = async (id,updatedPerson) => {
    await axios.put(`http://localhost:3002/personalNames/${id}`, updatedPerson);
  };

  render() {
    //search bar iceriine yazilan kisilerin isimlerine gore aratma
    let filteredPerson = this.state.personalNames.filter((person) => {
      return (
        person.firstName
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    }).sort((a,b)=>{
      return (
        a.id < b.id ? 1 : a.id > b.id ? -1 :0)} );

    return (
      <Router>
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <React.Fragment>
                  <div className="row">
                    <div className="col-lg-12">
                      <RegisterInfo searchPersonProps={this.searchPerson} />
                    </div>
                  </div>
                  <PersonalList
                    deletePersonProp={this.deletePerson}
                    personalNames={filteredPerson}
                  />
                </React.Fragment>
              )}
            ></Route>

            <Route
              path="/add"
              render={({ history }) => (
                <AddPerson
                  addNewPersonProps={(newPerson) => {
                    this.addPerson(newPerson);
                    history.push("/");
                  }}
                />
              )}
            ></Route>
            <Route
              path="/edit/:id"
              render={(props) => (
                <EditPerson
               {...props}
                onEditPerson={(id, newPerson) => {
                    this.editPerson(id, newPerson);
                    
                  }}
                />
              )}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
