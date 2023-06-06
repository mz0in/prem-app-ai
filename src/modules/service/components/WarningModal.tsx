import OutlineCircleButton from "shared/components/OutlineCircleButton";
import PrimaryButton from "shared/components/PrimaryButton";
import WarningModalIcon from "shared/components/WarningModalIcon";
import { WarningModalProps } from "shared/types";
import Modal from "react-modal";

const WarningModal = ({
  onCancel,
  onOk,
  cancelButtonText = "Cancel",
  okButtonText = "Ok",
  icon,
  isOpen,
  title = "Warning",
  description,
}: WarningModalProps) => {
  return (
    <Modal className="warning-modal" isOpen={isOpen} onRequestClose={onCancel}>
      <div className="warning-modal__content gradient-border w-[550px]">
        <div className="flex flex-wrap items-start gap-5 mt-5 mb-7">
          <button className="md:mb-5 max-sm:-mx-3">
            <div className="polygon-shape">{icon || <WarningModalIcon />}</div>
          </button>
          <div>
            <h2 className="text-lg mb-2">{title}</h2>
            <p className="!text-base">{description}</p>
          </div>
        </div>
        <div className="hr" />
        <div className="warning-modal__footer">
          <OutlineCircleButton
            onClick={onCancel}
            className="!rounded-md items-center flex !border h-[43px] !mt-0 justify-center opacity-70 w-full"
          >
            {cancelButtonText}
          </OutlineCircleButton>
          <PrimaryButton onClick={onOk} className="w-full">
            {okButtonText}
          </PrimaryButton>
        </div>
      </div>
    </Modal>
  );
};

export default WarningModal;
