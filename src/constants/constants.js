export const API_URL =
  "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230309T103252Z&X-Amz-Expires=86400&X-Amz-Signature=36a63079da0617ba60324e2f3f5b02fba38bbadd9bae51a3185746162af3f3d3&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject";

export const priceLists = {
  all: [0, 30000],
  lowPrice: [0, 10000],
  middlePrice: [10000, 15000],
  highPrice: [15000, 30000],
};
