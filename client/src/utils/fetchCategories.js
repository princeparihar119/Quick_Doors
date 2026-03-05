import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import { setAllCategory } from "../redux/productSlice";

// This function fetches all categories and dispatches to Redux
export const fetchAndStoreAllCategories = async (dispatch) => {
  try {
    const res = await Axios(SummaryApi.getAllCategory);
    const categories = res.data?.data || [];
    dispatch(setAllCategory(categories));
  } catch (err) {
    console.error("Failed to fetch categories:", err.message);
  }
};
