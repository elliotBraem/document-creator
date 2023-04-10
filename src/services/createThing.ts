import { request } from "near-social-bridge";

interface CreateThingResponse {
  error?: string;
  success?: boolean;
}

interface CreateThingPayload {
  title: string,
  body: string
}

const createThing = (payload: CreateThingPayload) => {
  return request<CreateThingResponse>("create-thing", payload);
};
export default createThing;
