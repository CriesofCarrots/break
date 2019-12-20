import {IGameService} from "./model";
import {injectPropertyFetcher} from "../../injects/injects-fetcher";
import {IFetcher} from "../../api/fetcher/model";
import Paths from "../../api/paths";


export default class GameService implements IGameService {

    @injectPropertyFetcher
    private fetcher!: IFetcher;


    saveGame = async(data: any) => {
        return await this.fetcher.post(Paths.Game.SaveGame(), data)
    };

    getDailyGameCounts = async() => {
        return await this.fetcher.get(Paths.Game.GetDailyGameCounts());
    };

    getDailyTransactionCounts = async() => {
        return await this.fetcher.get(Paths.Game.GetDailyTransactionCounts());
    };

    getGameTransactionCounts = async() => {
        return await this.fetcher.get(Paths.Game.GetGameTransactionCounts());
    };
}