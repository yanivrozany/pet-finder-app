import React, { Component } from 'react';
import ComboSelect from 'react-combo-select';
require('../node_modules/react-combo-select/style.css');


class FilterForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ageFilter: [],
      sizeFilter: []
        }
  }
  shouldComponentUpdate(){
    return false;
  }

  handleFilterAge = (value) => {
    this.props.onFilterAgeChange(value);
  }

  handleFilterSize = (value) => {
    this.props.onFilterSizeChange(value);
  }

  render() {
    const optionsAge = ['Adult','Senior','Young'];
    const optionsSize = ['S','M','L'];
    return (
        <div id="filters">
            <ComboSelect id="AgeFilter" text="Age:" onChange={this.handleFilterAge} data={optionsAge} type="multiselect"/>
            <ComboSelect id="SizeFilter" text="Size:" onChange={this.handleFilterSize} data={optionsSize} type="multiselect" />
        </div>
    )
  }
}

export default FilterForm;