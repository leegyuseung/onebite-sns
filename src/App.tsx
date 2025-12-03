import SessionProvider from "./provider/session-provider";
import RootRoute from "./root-router";

export default function App() {
  return (
    <SessionProvider>
      <RootRoute />
    </SessionProvider>
  );
}
