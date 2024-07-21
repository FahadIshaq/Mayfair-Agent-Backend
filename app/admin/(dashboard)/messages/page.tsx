import { Message } from "@/components/admin/tables/messages-tables/Message";
import { Property } from "@/components/admin/tables/property-tables/property";
import { messages } from "@/constants/data";

const Messages = () => {
  return (
    <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
      <Message data={messages} />
    </div>
  );
};

export default Messages;
