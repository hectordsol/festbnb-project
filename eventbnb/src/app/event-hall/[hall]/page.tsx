"use client";
import { useEffect, useState } from "react";

import { EventHallProvider } from "@/context/EventHallProvider";
import { ModalProvider } from "@/context/ModalProvider";
import useUsers from "@/hooks/useUsers";
import { Information } from "@/components/Hall/Infomation";
import { ReservationForm } from "@/components/Hall/ReservationForm";
import Back from "@/components/back/Back";
import {
  Images,
  Header,
  ImagesMovil,
  Reviews,
  ReviewsModal,
} from "@/components/Hall";
import { WindowSizeProvider } from "@/context/WindowSizeProvider";
// import AlertError from "@/components/alert/AlertError";

function Page({ params }: { params: { hall: string } }) {
  // console.log(params);
  const { getUserData, validateSession } = useUsers();
  const [data, setData] = useState({});
  const [isHidden, setIsHidden] = useState(true);
  
  useEffect(() => {
    const validate = async () => {

      try {
        const dataUser = await getUserData();
        setData({ error: false, id: dataUser._id });
      } catch (error) {
        setData({ error: true, id: "" });
        setIsHidden(false);
      }
    };
    validate();
  }, []);
  console.log(data);

  return (
    <EventHallProvider id={params.hall}>
      <Back />
      <WindowSizeProvider>
        {/* images movil */}
        <ImagesMovil />
        <div
          className="container max-w-screen-xl mx-auto px-4"
          id="page-event-hall"
        >
          <ModalProvider>
            <div className="pt-0 md:pt-6 border-b">
              {/* <MainData /> */}
              <Header />
              {/* images web */}
              <Images />
              <div className="flex flex-wrap md:flex-nowrap gap-2 md:flex-row relative">
                <div className="md:basis-8/12">
                  <div className="md:pr-16">
                    <Information clientId={data} id={params.hall} />
                  </div>
                </div>
                <div className="md:basis-4/12 w-full pb-10 sm:px-5 md:px-0">
                  <ReservationForm clientId={data}/>
                </div>
              </div>
            </div>
            <div className="py-10">
              <Reviews />
            </div>
            {/* Modal */}
            <ReviewsModal />
          </ModalProvider>
        </div>
      </WindowSizeProvider>
    </EventHallProvider>
  );
}

export default Page;
