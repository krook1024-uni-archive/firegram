import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

export default function ImageGrid({ setSelectedImg }) {
    const { docs } = useFirestore('images');
    return (
        <div className="img-grid">
            {docs &&
                docs.map(doc => (
                    <motion.div
                        className="img-wrap"
                        key={doc.id}
                        alt="img"
                        layout
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelectedImg(doc.url)}
                    >
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            alt=""
                            src={doc.url}
                        />
                    </motion.div>
                ))}
        </div>
    );
}
