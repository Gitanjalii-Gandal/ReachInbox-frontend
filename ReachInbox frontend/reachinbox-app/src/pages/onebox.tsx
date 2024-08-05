// src/pages/onebox.tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setThreads, deleteThread } from "../redux/oneboxSlice";
import { getThreads, deleteThreadById } from "../services/api";
import Button from "../components/Button";

const Onebox: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const threads = useSelector((state: RootState) => state.onebox.threads);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await getThreads();
        dispatch(setThreads(response.data));
      } catch (err) {
        setError("Failed to fetch threads");
        console.error(err);
      }
    };

    fetchThreads();
  }, [dispatch]);

  const handleDelete = async (threadId: string) => {
    try {
      await deleteThreadById(threadId);
      dispatch(deleteThread(threadId));
    } catch (err) {
      setError("Failed to delete thread");
      console.error(err);
    }
  };

  const handleReply = (threadId: string) => {
    // Implement reply functionality
  };

  return (
    <div className="p-4">
      {error && <p className="text-red-500">{error}</p>}
      <h1 className="text-2xl font-bold mb-4">Onebox</h1>
      <div>
        {threads.map((thread) => (
          <div key={thread.id} className="mb-4 p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{thread.subject}</h2>
            <p>{thread.body}</p>
            <Button onClick={() => handleDelete(thread.id)}>Delete</Button>
            <Button onClick={() => handleReply(thread.id)}>Reply</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Onebox;
