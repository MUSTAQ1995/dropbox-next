import { auth } from "@clerk/nextjs";
import Dropzone from "@/components/Dropzone";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { FileType } from "@/typing";
import TableWrapper from "@/components/table/TableWrapper";


const Dashboard = async () => {
  const {userId} = auth();

  const docResults = await getDocs(collection(db, "users", userId!, "files"))
  const skeletonFiles : FileType[] = docResults.docs.map(doc => ({
    id:doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullName:doc.data().fullName,
    downloadURL:doc.data().downloadURL,
    type:doc.data().type,
    size:doc.data().size,
  }));

  return (
    <div>
      <Dropzone/>  
      <section className="container space-y-5" >
        <h2 className="font-bold" >All Files</h2>
        <div>
          <TableWrapper
            skeletonFiles={skeletonFiles}
          />
        </div>
      </section>
    </div>
  )
}
// NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cmVndWxhci1zdW5iZWFtLTU3LmNsZXJrLmFjY291bnRzLmRldiQ
// CLERK_SECRET_KEY=sk_test_lvRPctLsyKP2y4RfzuD0Bks8rvEOSWfG6wUTLa4TmY
export default Dashboard