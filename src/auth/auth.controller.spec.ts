import { getRepositoryToken } from '@nestjs/typeorm'
import { AuthController } from './auth.controller'
import { UserService } from '../user/user.service'
import { AuthService } from './auth.service'
import { MailerService } from '../mailer/mailer.service'
import { ActionTokensService } from '../action-tokens/action-tokens.service'
import { ProjectService } from '../project/project.service'
import { AppLoggerService } from '../logger/logger.service'
import { User } from '../user/entities/user.entity'
import { Repository } from 'typeorm'
import { ActionToken } from '../action-tokens/action-token.entity'
import { Project } from '../project/entity/project.entity'
import { ProjectShare } from '../project/entity/project-share.entity'
import { Test, TestingModule } from '@nestjs/testing'

describe('AuthController', () => {
  let controller: AuthController

  const USER_REPOSITORY_TOKEN = getRepositoryToken(User)
  const ACTION_TOKEN_REPOSITORY_TOKEN = getRepositoryToken(ActionToken)
  const PROJECT_REPOSITORY_TOKEN = getRepositoryToken(Project)
  const PROJECT_SHARE_REPOSITORY_TOKEN = getRepositoryToken(ProjectShare)

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        UserService,
        {
          provide: USER_REPOSITORY_TOKEN,
          useValue: { create: jest.fn(), save: jest.fn(), findOne: jest.fn() },
        },
        MailerService,
        ActionTokensService,
        {
          provide: ACTION_TOKEN_REPOSITORY_TOKEN,
          useValue: {
            delete: jest.fn(),
            save: jest.fn(),
            findOneOrFail: jest.fn(),
          },
        },
        ProjectService,
        {
          provide: PROJECT_REPOSITORY_TOKEN,
          useValue: {
            count: jest.fn(),
            save: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            findOne: jest.fn(),
            find: jest.fn(),
          },
        },
        ProjectService,
        {
          provide: PROJECT_SHARE_REPOSITORY_TOKEN,
          useValue: {
            count: jest.fn(),
            save: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            findOne: jest.fn(),
            find: jest.fn(),
          },
        },
        AppLoggerService,
      ],
    }).compile()

    controller = module.get<AuthController>(AuthController)
  })

  describe('root', () => {
    it('should be defined with controller', () => {
      expect(controller).toBeDefined()
    })
  }),
    describe('auth.controller definding', () => {
      it('should be defined with changeEmail()', () => {
        expect(controller.changeEmail).toBeDefined()
      }),
        it('should be defined with loginUser()', () => {
          expect(controller.loginUser).toBeDefined()
        }),
        it('should be defined with me()', () => {
          expect(controller.me).toBeDefined()
        }),
        it('should be defined with register()', () => {
          expect(controller.register).toBeDefined()
        }),
        it('should be defined with requestReset()', () => {
          expect(controller.requestReset).toBeDefined()
        }),
        it('should be defined with reset()', () => {
          expect(controller.reset).toBeDefined()
        }),
        it('should be defined with verify()', () => {
          expect(controller.verify).toBeDefined()
        })
    })
})
