import { buildLogger, logger as winstonLogger } from "../../src/plugins/logger.plugin";

describe('plugins/logger', () => {
    test('buildLogger should returna function logger', () => {
        const logger = buildLogger('test');
        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    });

    test('logger.log should log a message', () => {
        //Arrange
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log')

        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);

        //Act
        logger.log(message);

        //Assert
        expect(winstonLoggerMock).toHaveBeenCalled();
        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({
                level: 'info',
                message,
                service
            }),
        );

    });

    test('logger.log should log an error', () => {
        //Arrange
        const winstonLoggerMock = jest.spyOn(winstonLogger, 'error')

        const message = 'error message';
        const service = 'test service';

        const logger = buildLogger(service);

        //Act
        logger.error(message);

        //Assert
        expect(winstonLoggerMock).toHaveBeenCalled();
        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'error',
            expect.objectContaining({
                message,
                service
            }),
        );

    });

    
});
