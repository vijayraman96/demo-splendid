import { useState } from "react";
// import { GET_BRAND_ITEM_LIST } from "../../Apollo/AdminServices/QueryRequest";
import { GET_BRAND_ITEM_LIST } from "../../Apollo/AdminServices/QueryRequest";
import graphHandler from "../../Apollo/graphHandler";

function useGetBrandList(preLoad = false) {
  const [brandList, setBrandList] = useState([]);
  const [loading, setLoading] = useState(preLoad);

  const getBrandList = async (req = {}) => {
    setLoading(true);
    const defaults = {
      active: true,
      is_product_sync_completed: true,
      is_shopify_sync_completed: true,
    };
    try {
      const { data } = await graphHandler().invoke(
        GET_BRAND_ITEM_LIST,
        { ...req, ...defaults },
        0,
        false,
        true
      );
      if (
        data &&
        data.getAllBrandList &&
        data.getAllBrandList.brands &&
        data.getAllBrandList.brands.length > 0
      ) {
        setBrandList([]);
        setBrandList(data.getAllBrandList.brands);
        setLoading(false);
      } else {
        setBrandList([]);
        setLoading(false);
      }
    } catch (error) {
      console.error("getAuthorList", error);
      setBrandList([]);
      setLoading(false);
    }
  };

  return {
    brandList,
    loading,
    getBrandList,
  };
}

export default useGetBrandList;
