import { useState } from 'react';
import { IoClose, IoCloudUploadOutline } from 'react-icons/io5';

import useImages from 'src/hooks/useImages';
import Button from 'src/lib/base/Buttons';
import { Card } from 'src/lib/base/Styled/Containers';
import { Row } from 'src/lib/base/Styled/Flex';
import { Modal, ModalContent, ModalHeader } from 'src/lib/base/Styled/Modal';
import FileDropZone from 'src/lib/components/FileDropZone';

const FileUpdaloadModal = (props: Props.FileUploadModal) => {
  const { show, onClose } = props;
  const { images, setImages } = useImages();
  const [files, setFiles] = useState<File[]>([]);

  const setImageFiles = () => {
    if (!files) return;
    const newImages = [...images];
    new Array(files.length).fill(0).forEach((_, i) => {
      const image = files[i];
      newImages.push({
        name: image.name,
        size: image.size,
        path: '',
        type: image.type,
        originFile: image,
        originUrl: URL.createObjectURL(files[i]),
      });
    });
    setImages(newImages);
  };

  return (
    <Modal show={show}>
      <ModalContent>
        <Card>
          <ModalHeader>
            <h3>Upload Images</h3>
            <Button type="icon" onClick={onClose}>
              <IoClose size={28} />
            </Button>
          </ModalHeader>

          <FileDropZone fileList={files} onChange={setFiles} />

          <Row right gap={4}>
            <Button
              type="outline"
              label="Clean"
              IconLeft={<IoClose size={20} type="close" />}
              disabled={!files.length}
              onClick={() => setFiles([])}
            />
            <Button
              type="main"
              label="Upload"
              IconLeft={<IoCloudUploadOutline size={20} />}
              disabled={!files.length}
            />
          </Row>
        </Card>
      </ModalContent>
    </Modal>
  );
};

export default FileUpdaloadModal;
