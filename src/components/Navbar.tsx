import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@/components/Button";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <div className=" flex">
      {session ? (
        <>
          <div>Welcome {session.user?.name}!!</div>
          <Button
            onClick={() => {
              signOut()
                .then((res) => {
                  console.log(res);
                })
                .catch((error) => {
                  console.error(error);
                });
            }}
            buttonClass=""
            title="Sign Out"
          />
        </>
      ) : (
        <Button
          onClick={() => {
            signIn()
              .then((res) => {
                console.log(res);
              })
              .catch((error) => {
                console.error(error);
              });
          }}
          buttonClass=""
          title="Sign In"
        />
      )}
    </div>
  );
}
