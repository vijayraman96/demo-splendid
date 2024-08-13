import { useState } from "react";
import graphHandler from "../../Apollo/graphHandler";
import { GET_ALL_CREATOR_LIST_GQL } from "../../Apollo/ProfileService/profileQueryRequest";

function useGetAllCreatorList(preLoad = false) {
  const [allCreatorList, setAllCreatorList] = useState([]);
  const [loading, setLoading] = useState(preLoad);

  const getAllCreatorList = async (req = {}) => {
    setLoading(true);

    try {
      const { data } = await graphHandler().invoke(
        GET_ALL_CREATOR_LIST_GQL,
        { ...req },
        1,
        false,
        true
      );

      if (
        data &&
        data.getAllCreatorList &&
        data.getAllCreatorList.creators &&
        data.getAllCreatorList.creators.length > 0
      ) {
        setAllCreatorList([]);
        setAllCreatorList(data.getAllCreatorList.creators);
        setLoading(false);
      } else {
        setAllCreatorList([]);
        setLoading(false);
      }
    } catch (error) {
      console.error("GET CREATOR LIST", error);
      setAllCreatorList([]);
      setLoading(false);
    }
  };

  return {
    allCreatorList,
    loading,
    getAllCreatorList,
  };
}

export default useGetAllCreatorList;
