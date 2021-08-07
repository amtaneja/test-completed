import React from 'react';
import { connect } from 'react-redux';
import { apiActions } from '../../redux/actions/apiActions';
import ResponsiveTable from '../ResponsiveTable/ResponsiveTable';


class Main extends React.Component {

  state = {
    name: ''
  }
  componentDidMount() {
    /* Pass a country name here as an argument to get back a list of universities in the county*/
    this.props.loadUniversities('United States');
  }



  /* Please define the internal structure for the Responsive Table Component */
  renderTable() {
    let { universities } = this.props;
    return universities.length ? <ResponsiveTable
      headings={[{ title: 'Name', value: 'name' }, { title: 'Website(s)', value: 'websites' }]}
      rows={universities.map((item) => {
        return { name: item.name, websites: item.web_pages ? item.web_pages.join(',') : '' }
      })}
    /> : <p>Loading...</p>


  }
  getData(value) {
    this.setState({
      name: value
    })
    console.log(value)
  }

  render() {
    return <div>

      {this.renderTable()}
    </div>
  }

}
function mapState(state) {
  const { universities } = state.api;
  return { universities };
}

const actionCreators = {
  loadUniversities: apiActions.getUniversities
}

export default connect(mapState, actionCreators)(Main);