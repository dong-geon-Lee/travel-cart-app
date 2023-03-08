export const API_URL =
  "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1be87a4-38e1-4c1e-a527-bd4775812374/mock_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230308T102755Z&X-Amz-Expires=86400&X-Amz-Signature=a9a39f5c32ded4c92d680a800b483e1ec0291f8f282e34f46d4d1e9a15b78f60&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22mock_data.json%22&x-id=GetObject";

export const priceLists = {
  all: [0, 30000],
  lowPrice: [0, 10000],
  middlePrice: [10000, 15000],
  highPrice: [15000, 30000],
};
