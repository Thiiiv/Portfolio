"use client";

import React, { FC, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { useTranslation } from "@/lib/i18n";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const { t } = useTranslation()
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg p-6 max-w-3xl mx-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // Empêche la propagation du clic
          >
            {children}
            {/* <button
              onClick={onClose}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Fermer
            </button> */}
            <Button
                variant="outline"
                className="mt-4"
                onClick={onClose}
            >
                {t('button.close')}
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
