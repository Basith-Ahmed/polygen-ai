"use client";

import { useProModal } from "@/hooks/UseProModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import {
  Check,
  CircleCheck,
  CircleCheckBig,
  Code,
  ImageIcon,
  MessagesSquare,
  Music,
  VideoIcon,
  Zap,
} from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";

const tools = [
  {
    label: "Conversation",
    icon: MessagesSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    label: "Video Generator",
    icon: VideoIcon,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    label: "Audio Generator",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Code Generator",
    icon: Code,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

export default function ProModal() {
  const [loading, setLoading] = useState(false);
  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log(error, "STRIPE_CLIENT_ERROR");
    } finally {
      setLoading(false);
    }
  };

  const proModal = useProModal();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to PolyGen
              <Badge variant="premium" className="uppercase text-sm py-1">
                Pro
              </Badge>
            </div>
            {/* <p className="text-[10px] font-semibold text-zinc-500 -mt-2">get unlimited access to all the models.</p> */}
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.label}
                className="p-3 border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <CircleCheckBig className="mr-2 text-green-400" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            size="lg"
            variant="premium"
            className="w-full"
            onClick={onSubscribe}
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
