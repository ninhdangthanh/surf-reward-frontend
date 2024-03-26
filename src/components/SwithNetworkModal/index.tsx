import { Modal, ModalContent } from '@nextui-org/react';

const SwitchNetworkModal = (props: any) => {
  return (
    <>
      <Modal isOpen={true} onOpenChange={() => {}} hideCloseButton style={{ borderColor: 'black' }}>
        <ModalContent className=" max-w-[450px]">
          <div className="border-[1px] px-8 py-4 flex items-center justify-between">
            Please switch network to buy token{' '}
            <span
              onClick={() => {
                if (props.isETH) {
                  props.switchToMainnet();
                } else {
                  props.switchToBNB();
                }
              }}
              className="text-blue-700 ml-4 cursor-pointer"
            >
              Swith network
            </span>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SwitchNetworkModal;

// updated
