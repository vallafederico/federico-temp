export default function ({ children, className }) {
  return <section class={"Section " + className}>{children}</section>;
}
