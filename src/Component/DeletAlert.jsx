"use client";

import {AlertDialog, Button} from "@heroui/react";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";

export function Default({pet}) {
    const onDelete = async(userId) => {
        const res = await fetch(`https://pet-server-nu.vercel.app/allpat/${userId}`, {
            method: 'DELETE'
        })
        const data = await res.json()
        toast.error('Pat delete success')
        window.location.href = "/my-listing";
    }
  return (
    <AlertDialog>
      <Button className="   bg-red-500 hover:bg-red-600 text-white py-3 rounded-sm w-full"><Trash2 size={20} /> Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={()=>onDelete(pet._id)} type="submit" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
} 