import {Injectable} from '@nestjs/common';
import {ServiceBusClient, ServiceBusMessage} from "@azure/service-bus";


@Injectable()
export class AppService {

    public connectionString = 'Endpoint=sb://finalse.servicebus.windows.net/;SharedAccessKeyName=connectionOne;SharedAccessKey=QxxRtqPuLuc7ODB9svc4Or1Xx/DxZMlsD+ASbJpJ86k=;EntityPath=finalqueue';
    public queueName = 'finalqueue';

    public serviceBusClient = new ServiceBusClient(this.connectionString);
    public sender = this.serviceBusClient.createSender(this.queueName);
    public receiver = this.serviceBusClient.createReceiver(this.queueName);


    getHello(): string {
        return 'Hello World!';
    }

    public async getDataFromClient(prescriptionData: any): Promise<void> {
        try {
            const message: ServiceBusMessage = {
                body: JSON.stringify(prescriptionData),
            };

            await this.sender.sendMessages(message);

            console.log(`Prescription data sent to the Azure Service Bus queue.`);
        } catch (error) {
            console.error(`Error sending prescription data to the Azure Service Bus queue: ${error}`);
        }
    }

}
