import requests from "./request";

//三级联动接口  /api/product/getBaseCategoryList
export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", methods: "get" });
