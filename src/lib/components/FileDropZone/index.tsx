import { DragEventHandler, useMemo } from 'react';
import { IoAdd, IoCloudUpload } from 'react-icons/io5';

import If from 'src/lib/base/If';
import { Column, Row } from 'src/lib/base/Styled/Flex';
import { Image } from 'src/lib/base/Styled/Images';
import { VerySmall } from 'src/lib/base/Styled/Typograph';
import { limitString } from 'src/utils/string';

import { DropBox, DropBoxBtn } from './styled';

const FileDropZone = (props: Props.FileDropZone) => {
  const { fileList, onChange, onRemove } = props;

  const noAddFiles = (inputFiles: FileList) => {
    const fileArr = new Array(inputFiles.length).fill(0).map((_, i) => inputFiles[i]);
    onChange && onChange([...fileList, ...fileArr]);
  };

  const onDropFiles: DragEventHandler<HTMLDivElement> = ev => {
    ev.preventDefault();
    ev.dataTransfer && noAddFiles(ev.dataTransfer.files);
  };

  const onDragOver: DragEventHandler<HTMLDivElement> = ev => {
    ev.preventDefault();
  };

  const ImageList = useMemo(() => {
    return fileList.map((file, i) => {
      const imgUrl = URL.createObjectURL(file);
      return (
        <Column w="14rem" key={file.name + i}>
          <Image src={imgUrl} />
          <VerySmall>{limitString(file.name, 14)}</VerySmall>
        </Column>
      );
    });
  }, [fileList]);

  return (
    <DropBox onDragOver={onDragOver} onDrop={onDropFiles}>
      <If check={!fileList.length}>
        <Column>
          <IoCloudUpload size={48} />
          <p>Select images or drop images files here</p>
        </Column>
      </If>
      <If check={!!fileList.length}>
        <Row left wrap gap={4}>
          {ImageList}
        </Row>
      </If>
      <DropBoxBtn>
        <input
          type="file"
          multiple
          onChange={ev => ev.target.files && noAddFiles(ev.target.files)}
        />
        <IoAdd size={32} />
      </DropBoxBtn>
    </DropBox>
  );
};

export default FileDropZone;
