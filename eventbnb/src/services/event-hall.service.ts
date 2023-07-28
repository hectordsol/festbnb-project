import ApiBase from "@/config/axios.config";
import { Body, IEventHall } from "@/interfaces/event-hall.interface";

const getById = async (id: string): Promise<IEventHall | null> => {
  const { data: res }: { data: Body<IEventHall> } = await ApiBase.get(`/salones/${id}`);
  if(res.error) return null;
  return res.data;
}

const EventHallService = {
  getById,
}

export default EventHallService;
