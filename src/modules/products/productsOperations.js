import * as actions from './productsActions';
import Api from '../../api';


export function fetchLatest() {
  return async function fetchLatestThunk(dispatch){
    try {
      dispatch(actions.fetchLatest.start());

      const res  = await Api.Products.getLatest();
      console.log('(res.data)' ,res.data);
      dispatch(actions.fetchLatest.success(res.data));
    }catch (e) {
      console.error(e);
      console.log('error in fetchLatest');
      dispatch(actions.fetchLatest.error({message: e.message}));
    }
  }
}
