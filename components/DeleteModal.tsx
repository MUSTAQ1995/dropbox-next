"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { db, storage } from "@/firebase"
import { useAppStore } from "@/store/store"
import { useUser } from "@clerk/nextjs"
import { deleteDoc, doc } from "firebase/firestore"
import { deleteObject, ref } from "firebase/storage"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import toast from "react-hot-toast";

export function DeleteModal() {
  const {user } = useUser();
  const [isDeleteModalOpen, setIsDeleteModalOpen, fileId, setFileId] = useAppStore((state) => [
    state.isDeleteModalOpen,
    state.setIsDeleteModalOpen,
    state.fileId,
    state.setFileId,
  ]);

  const deleteFile =  async () => {
    if(!user || !fileId) return;
    const fileRef = ref(storage, `users/${user.id}/files/${fileId}`);
    const toastId = toast.loading("Deleting....")
    try {
      deleteObject(fileRef).then(async () => {
        deleteDoc(doc(db, "users", user.id, "files", fileId)).then(() => {
          toast.success("Deleted Successfully", {
            id:toastId
          });
        })
      })
      .finally(()=>{
        setIsDeleteModalOpen(false)
      })
    } catch (error){
      toast.error("Error deleting document", {
        id:toastId
      });
    }
  };

  return (
    <Dialog
      open={isDeleteModalOpen}
      onOpenChange={(isOpen)=>{
        setIsDeleteModalOpen(isOpen)
      }}
    >
      {/* <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete?</DialogTitle>
          <DialogDescription>
           This action cannot be undone. This will permanently delete your file!
          </DialogDescription>
        </DialogHeader>
       <div className="flex space-x-2 py-3" >
        <Button
          type="submit"
          size="sm"
          className="px-3 flex-1"
          onClick={()=>setIsDeleteModalOpen(false)}
        >
          <span className="sr-only" >Cancel</span>
          <span>Cancel</span>
        </Button>

        <Button
          type="submit"
          size="sm"
          variant={"destructive"}
          className="px-3 flex-1"
          onClick={()=> deleteFile()}
        >
          <span className="sr-only" >Delete</span>
          <span>Delete</span>
        </Button>

       </div>
        {/* <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}


export default DeleteModal