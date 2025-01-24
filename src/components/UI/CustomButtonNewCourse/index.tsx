import { Button } from '@nextui-org/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Text from '../Text';

const CustomButtonNewCourse = ({
    handleClickButton,
}: {
    handleClickButton: VoidFunction;
}) => {
    return (
        <ConnectButton.Custom>
            {({ account, chain, openConnectModal, mounted }) => {
                const ready = mounted;
                const connected = ready && account && chain;

                return (
                    <div>
                        {!connected ? (
                            <Button
                                onClick={openConnectModal}
                                className="bg-main w-max min-h-[40px] rounded"
                            >
                                <Text className="text-white" type="font-16-600">
                                    New Course
                                </Text>
                            </Button>
                        ) : (
                            <Button
                                onClick={handleClickButton}
                                className="bg-main w-max min-h-[40px] rounded"
                            >
                                <Text className="text-white" type="font-16-600">
                                    New Course
                                </Text>
                            </Button>
                        )}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};

export default CustomButtonNewCourse;
