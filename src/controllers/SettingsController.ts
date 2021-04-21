import { Request, Response } from 'express';

import { getCustomRepository } from 'typeorm'

import { SettingsRepository } from '../repositories/SettingsRepository'

class SettingController {

    async create(request, response) {
        const { chat, username } = request.body

        const settingsRepository = getCustomRepository(SettingsRepository)

        const settings = settingsRepository.create({
            chat,
            username
        })

        await settingsRepository.save(settings)

        response.json(settings)
    }

}

export { SettingController }