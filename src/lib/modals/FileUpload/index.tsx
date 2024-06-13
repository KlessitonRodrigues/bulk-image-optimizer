import { DragEventHandler, useMemo, useState } from 'react';

import useImages from 'src/hooks/useImages';
import Icons from 'src/lib/base/Icons';
import If from 'src/lib/base/If';
import { MainRoundedBtn, OutlineBtn } from 'src/lib/styled/Buttons';
import { Card } from 'src/lib/styled/Containers';
import { Hr } from 'src/lib/styled/Divisors';
import { Column, Row } from 'src/lib/styled/Flex';
import { Image } from 'src/lib/styled/Images';
import { Modal, ModalContent } from 'src/lib/styled/Modal';
import { VerySmall } from 'src/lib/styled/Typograph';
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
        <Column w="8rem" key={file.name + i}>
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
                <Icons size={8} type="close" onPress={onClose} />
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
                <Icons size={12} type="image" />
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
            <OutlineBtn disabled={!files.length} onClick={() => setFiles([])}>
              <Icons size={6} type="close" />
              Clean
            </OutlineBtn>
            <MainRoundedBtn disabled={!files.length} onClick={setImageFiles}>
              <Icons size={6} type="image" />
              Upload
            </MainRoundedBtn>
          </Row>
        </Card>
      </ModalContent>
    </Modal>
  );
};

export default FileUpdaloadModal;
