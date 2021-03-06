import {connect } from 'react-redux';
import {compose, lifecycle} from 'recompose';
import  LatestListView from './LatestListView';
import { productsOperations } from '../../modules/products';


const mapStateToProps = state =>{
  // console.log('state.products.latest' , state.products.latest.items);
  return{
    list: state.products.latest.list,
    isLoading: state.products.latest.isLoading,
  }
};

const mapDispatchToProps ={
  fetchLatest: productsOperations.fetchLatest,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount(){
      this.props.fetchLatest();
    }
  })
);

export default enhancer(LatestListView);
