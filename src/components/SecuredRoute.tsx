import React from "react";
export default function withSubscription(WrappedComponent) {
  return (props: any) => {
    if (!props.app.success) {
      try {
        const obj: string = localStorage.getItem("user") || "";
        const user = JSON.parse(obj);
        setTimeout(() => {
          props.UserUpdate(user);
        }, 2000);
      } catch (err) {
        props.history.push("/");
      }
    }
    if (props.app.success) {
      return <WrappedComponent {...props} />;
    }
    return <>Loading</>;
  };
}
