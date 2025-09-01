
import { http, HttpResponse } from "msw";
import endpoints from "../api/sample-response.json";


const getResponse = (name: string) =>
  endpoints.endpoints.find((e) => e.name === name)?.response;

export const handlers = [
  http.get("/api/borrowers/pipeline", () => {
    return HttpResponse.json(getResponse("Get Borrower Pipeline"));
  }),


  http.get("/api/borrowers/:id", ({ params }) => {
    return HttpResponse.json(getResponse("Get Borrower Detail"));
  }),


  http.post("/api/borrowers/:id/request-documents", () => {
    return HttpResponse.json(getResponse("Request Documents"));
  }),


  http.post("/api/borrowers/:id/send-valuer", () => {
    return HttpResponse.json(getResponse("Send to Valuer"));
  }),

  
  http.post("/api/borrowers/:id/approve", () => {
    return HttpResponse.json(getResponse("Approve Loan"));
  }),


  http.post("/api/borrowers/:id/escalate", () => {
    return HttpResponse.json(getResponse("Escalate to Credit Committee"));
  }),

 
  http.get("/api/broker/:id", () => {
    return HttpResponse.json(getResponse("Get Broker Info"));
  }),


  http.get("/api/onboarding/workflow", () => {
    return HttpResponse.json(getResponse("Get Onboarding Workflow"));
  }),
];
