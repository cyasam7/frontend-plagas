import {
  Dialog,
  DialogContent,
  CircularProgress,
} from "@material-ui/core";
import React, { useMemo, useState } from "react";

const ModalContext = React.createContext();
export function ModalProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const value = useMemo(() => {
    return {
      loading,
      setLoading,
    };
  }, [loading]);
  return (
    <ModalContext.Provider value={value}>
      <Dialog open={loading}>
        <DialogContent>
          <CircularProgress />
        </DialogContent>
      </Dialog>
      {children}
    </ModalContext.Provider>
  );
}
export function useModal() {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error("Debe estar dentro del provider");
  }
  return context;
}
