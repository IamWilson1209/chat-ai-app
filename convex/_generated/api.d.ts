/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as clerkAction from "../clerkAction.js";
import type * as functions_conversations from "../functions/conversations.js";
import type * as functions_messages from "../functions/messages.js";
import type * as functions_users from "../functions/users.js";
import type * as httpAction from "../httpAction.js";
import type * as openaiAction from "../openaiAction.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  clerkAction: typeof clerkAction;
  "functions/conversations": typeof functions_conversations;
  "functions/messages": typeof functions_messages;
  "functions/users": typeof functions_users;
  httpAction: typeof httpAction;
  openaiAction: typeof openaiAction;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
