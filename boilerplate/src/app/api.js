import { create } from "apisauce";

const api = create({
  baseURL: "BASE_URL",
});

api.addRequestTransform(requestTransform);

function requestTransform(request) {
  console.log("Before execute request...", request);
}

export default api;
