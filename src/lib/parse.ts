import Parse from "parse/node";

Parse.initialize(
  process.env.NEXT_PUBLIC_PARSE_APP_ID as string,
  process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY as string
);
Parse.serverURL = process.env.NEXT_PUBLIC_PARSE_SERVER_URL as string;

export default Parse;
