import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSLAConfig as getSLAConfigAPI,
  updateSLAConfig as updateSLAConfigAPI,
} from "../services/sla.api";
import { setSLAConfig, setLoading, setError } from "../state/sla.slice";

export const useSLA = () => {
  const dispatch = useDispatch();
  const { config, loading, error } = useSelector((s) => s.sla);

  const fetchSLAConfig = useCallback(async () => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    try {
      const res = await getSLAConfigAPI();
      if (res?.data) dispatch(setSLAConfig(res.data));
      return res;
    } catch (err) {
      dispatch(
        setError(err.response?.data?.message || "Failed to load SLA config")
      );
      throw err;
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const saveSLAConfig = useCallback(
    async (cfg) => {
      dispatch(setLoading(true));
      dispatch(setError(null));
      try {
        const res = await updateSLAConfigAPI(cfg);
        if (res?.data) dispatch(setSLAConfig(res.data));
        return res;
      } catch (err) {
        dispatch(
          setError(err.response?.data?.message || "Failed to save SLA config")
        );
        throw err;
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch]
  );

  return { config, loading, error, fetchSLAConfig, saveSLAConfig };
};
