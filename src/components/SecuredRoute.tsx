import React from "react";
export default function withSubscription(WrappedComponent) {
  return (props: any) => {
    if (!props.login.success) {
      const obj: string = localStorage.getItem("user") || "";
      const user = JSON.parse(obj);
      setTimeout(() => {
        props.UserUpdate(user);
      }, 2000);
    }
    if (props.login.success) {
      return <WrappedComponent {...props} />;
    }
    return <>Loading</>;
  };
}
