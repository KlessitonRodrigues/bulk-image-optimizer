import { DragEventHandler, useMemo, useState } from 'react';
import { IoClose, IoCloudUploadOutline } from 'react-icons/io5';

import useImages from 'src/hooks/useImages';
import Button from 'src/lib/base/Buttons';
import If from 'src/lib/base/If';
import { Card } from 'src/lib/base/Styled/Containers';
import { Column, Row } from 'src/lib/base/Styled/Flex';
import { Image } from 'src/lib/base/Styled/Images';
import { Modal, ModalContent } from 'src/lib/base/Styled/Modal';
import { VerySmall } from 'src/lib/base/Styled/Typograph';
import { limitString } from 'src/utils/string';

import { DropBox } from './styled';

const FileUpdaloadModal = (props: Props.FileUploadModal) => {
  const { show, onClose } = props;
  const { images, setImages } = useImages();
  const [files, setFiles] = useState<File[]>([]);

  const setImageFiles = () => {
    if (!files) return;
    const newImages = [...images];
    new Array(files.length).fill(0).forEach((x, i) => {
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
    onClose();
  };

  const noAddFiles = (inputFiles: FileList) => {
    const fileArr = new Array(inputFiles.length).fill(0).map((x, i) => inputFiles[i]);
    setFiles([...files, ...fileArr]);
  };

  const onDropFiles: DragEventHandler<HTMLLabelElement> = ev => {
    ev.preventDefault();
    ev.dataTransfer && noAddFiles(ev.dataTransfer.files);
  };

  const onDragOver: DragEventHandler<HTMLLabelElement> = ev => {
    ev.preventDefault();
  };

  const ImageList = useMemo(() => {
    return files.map((file, i) => {
      const imgUrl = URL.createObjectURL(file);
      return (
        <Column w="10rem" key={file.name + i}>
          <Image src={imgUrl} />
          <VerySmall>{limitString(file.name, 14)}</VerySmall>
        </Column>
      );
    });
  }, [files]);

  return (
    <Modal show={show}>
      <ModalContent>
        <Card>
          <div>
            <Row>
              <Row left>
                <h3>Upload Images</h3>
              </Row>
              <Row right>
                <Button type="icon" onClick={onClose}>
                  <IoClose size={28} />
                </Button>
              </Row>
            </Row>
          </div>

          <DropBox onDragOver={onDragOver} onDrop={onDropFiles}>
            <input
              type="file"
              multiple
              onChange={ev => ev.target.files && noAddFiles(ev.target.files)}
            />
            <If check={!files.length}>
              <Column>
                <IoCloudUploadOutline size={64} />
                <p>Select or Drop files here</p>
              </Column>
            </If>
            <If check={!!files.length}>
              <Row left wrap gap={4}>
                {ImageList}
              </Row>
            </If>
          </DropBox>

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
              onClick={setImageFiles}
            />
          </Row>
        </Card>
      </ModalContent>
    </Modal>
  );
};

export default FileUpdaloadModal;
